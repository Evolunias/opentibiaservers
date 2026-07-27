import ActiveTibiaoriginsDiscordKeywordPage, { generateMetadata } from './active-tibiaorigins-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaoriginsDiscordKeywordPage />;
}
