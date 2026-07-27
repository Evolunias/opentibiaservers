import OfficialDemolidoresOnlineKeywordPage, { generateMetadata } from './official-demolidores-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDemolidoresOnlineKeywordPage />;
}
