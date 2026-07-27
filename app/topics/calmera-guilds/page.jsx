import CalmeraGuildsKeywordPage, { generateMetadata } from './calmera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraGuildsKeywordPage />;
}
