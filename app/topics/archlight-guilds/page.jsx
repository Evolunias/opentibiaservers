import ArchlightGuildsKeywordPage, { generateMetadata } from './archlight-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightGuildsKeywordPage />;
}
