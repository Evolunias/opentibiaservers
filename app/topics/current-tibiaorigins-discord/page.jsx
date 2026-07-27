import CurrentTibiaoriginsDiscordKeywordPage, { generateMetadata } from './current-tibiaorigins-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaoriginsDiscordKeywordPage />;
}
