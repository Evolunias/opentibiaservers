import OtServersOnlineKeywordPage, { generateMetadata } from './ot-servers-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersOnlineKeywordPage />;
}
