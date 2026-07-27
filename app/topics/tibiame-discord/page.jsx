import TibiameDiscordKeywordPage, { generateMetadata } from './tibiame-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameDiscordKeywordPage />;
}
