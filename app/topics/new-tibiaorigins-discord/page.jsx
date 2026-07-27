import NewTibiaoriginsDiscordKeywordPage, { generateMetadata } from './new-tibiaorigins-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaoriginsDiscordKeywordPage />;
}
