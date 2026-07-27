import CurrentTibiameDiscordKeywordPage, { generateMetadata } from './current-tibiame-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiameDiscordKeywordPage />;
}
