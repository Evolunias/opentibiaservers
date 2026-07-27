import NepteraOnlineKeywordPage, { generateMetadata } from './neptera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepteraOnlineKeywordPage />;
}
