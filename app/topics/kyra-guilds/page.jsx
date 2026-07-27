import KyraGuildsKeywordPage, { generateMetadata } from './kyra-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KyraGuildsKeywordPage />;
}
