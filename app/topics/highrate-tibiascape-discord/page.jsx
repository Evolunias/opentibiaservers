import HighrateTibiascapeDiscordKeywordPage, { generateMetadata } from './highrate-tibiascape-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiascapeDiscordKeywordPage />;
}
