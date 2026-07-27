import ShiveraGuildsKeywordPage, { generateMetadata } from './shivera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShiveraGuildsKeywordPage />;
}
