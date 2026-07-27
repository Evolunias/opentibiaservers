import ObsidiaGuildsKeywordPage, { generateMetadata } from './obsidia-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ObsidiaGuildsKeywordPage />;
}
