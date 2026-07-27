import ThaisotDiscordKeywordPage, { generateMetadata } from './thaisot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotDiscordKeywordPage />;
}
