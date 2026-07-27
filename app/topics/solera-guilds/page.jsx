import SoleraGuildsKeywordPage, { generateMetadata } from './solera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SoleraGuildsKeywordPage />;
}
