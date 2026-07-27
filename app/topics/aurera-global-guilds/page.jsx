import AureraGlobalGuildsKeywordPage, { generateMetadata } from './aurera-global-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalGuildsKeywordPage />;
}
