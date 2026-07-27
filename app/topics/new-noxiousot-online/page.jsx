import NewNoxiousotOnlineKeywordPage, { generateMetadata } from './new-noxiousot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNoxiousotOnlineKeywordPage />;
}
