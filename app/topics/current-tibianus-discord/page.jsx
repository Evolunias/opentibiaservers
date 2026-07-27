import CurrentTibianusDiscordKeywordPage, { generateMetadata } from './current-tibianus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibianusDiscordKeywordPage />;
}
