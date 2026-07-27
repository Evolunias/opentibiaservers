import VineraGuildsKeywordPage, { generateMetadata } from './vinera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VineraGuildsKeywordPage />;
}
