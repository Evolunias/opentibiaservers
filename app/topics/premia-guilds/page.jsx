import PremiaGuildsKeywordPage, { generateMetadata } from './premia-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PremiaGuildsKeywordPage />;
}
