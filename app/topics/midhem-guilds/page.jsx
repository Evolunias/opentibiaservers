import MidhemGuildsKeywordPage, { generateMetadata } from './midhem-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemGuildsKeywordPage />;
}
