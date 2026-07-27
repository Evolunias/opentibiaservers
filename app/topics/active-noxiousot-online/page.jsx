import ActiveNoxiousotOnlineKeywordPage, { generateMetadata } from './active-noxiousot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNoxiousotOnlineKeywordPage />;
}
