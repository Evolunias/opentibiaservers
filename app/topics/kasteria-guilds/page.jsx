import KasteriaGuildsKeywordPage, { generateMetadata } from './kasteria-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaGuildsKeywordPage />;
}
