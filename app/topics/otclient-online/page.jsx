import OtclientOnlineKeywordPage, { generateMetadata } from './otclient-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtclientOnlineKeywordPage />;
}
