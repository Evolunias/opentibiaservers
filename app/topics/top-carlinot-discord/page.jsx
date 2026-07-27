import TopCarlinotDiscordKeywordPage, { generateMetadata } from './top-carlinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCarlinotDiscordKeywordPage />;
}
