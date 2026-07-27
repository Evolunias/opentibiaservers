import LowrateLumineraOnlineKeywordPage, { generateMetadata } from './lowrate-luminera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateLumineraOnlineKeywordPage />;
}
