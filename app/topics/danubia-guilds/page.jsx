import DanubiaGuildsKeywordPage, { generateMetadata } from './danubia-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DanubiaGuildsKeywordPage />;
}
