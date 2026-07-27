import AnticaGuildsKeywordPage, { generateMetadata } from './antica-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AnticaGuildsKeywordPage />;
}
