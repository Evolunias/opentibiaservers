import CurrentTibiascapeDiscordKeywordPage, { generateMetadata } from './current-tibiascape-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiascapeDiscordKeywordPage />;
}
