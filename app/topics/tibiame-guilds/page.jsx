import TibiameGuildsKeywordPage, { generateMetadata } from './tibiame-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameGuildsKeywordPage />;
}
