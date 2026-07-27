import HighrateLumineraOnlineKeywordPage, { generateMetadata } from './highrate-luminera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateLumineraOnlineKeywordPage />;
}
