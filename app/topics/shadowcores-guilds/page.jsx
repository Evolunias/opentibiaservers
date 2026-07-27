import ShadowcoresGuildsKeywordPage, { generateMetadata } from './shadowcores-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresGuildsKeywordPage />;
}
