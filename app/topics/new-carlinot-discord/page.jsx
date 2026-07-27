import NewCarlinotDiscordKeywordPage, { generateMetadata } from './new-carlinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCarlinotDiscordKeywordPage />;
}
