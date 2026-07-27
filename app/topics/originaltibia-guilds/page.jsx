import OriginaltibiaGuildsKeywordPage, { generateMetadata } from './originaltibia-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaGuildsKeywordPage />;
}
