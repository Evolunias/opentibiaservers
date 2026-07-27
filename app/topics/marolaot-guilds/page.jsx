import MarolaotGuildsKeywordPage, { generateMetadata } from './marolaot-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotGuildsKeywordPage />;
}
