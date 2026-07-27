import ActiveCarlinotDiscordKeywordPage, { generateMetadata } from './active-carlinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCarlinotDiscordKeywordPage />;
}
