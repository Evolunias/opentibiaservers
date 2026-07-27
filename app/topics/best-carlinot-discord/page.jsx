import BestCarlinotDiscordKeywordPage, { generateMetadata } from './best-carlinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCarlinotDiscordKeywordPage />;
}
