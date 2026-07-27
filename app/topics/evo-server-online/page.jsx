import EvoServerOnlineKeywordPage, { generateMetadata } from './evo-server-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerOnlineKeywordPage />;
}
