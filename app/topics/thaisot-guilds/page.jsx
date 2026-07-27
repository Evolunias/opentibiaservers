import ThaisotGuildsKeywordPage, { generateMetadata } from './thaisot-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotGuildsKeywordPage />;
}
