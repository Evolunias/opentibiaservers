import CurrentNoxiousotOnlineKeywordPage, { generateMetadata } from './current-noxiousot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNoxiousotOnlineKeywordPage />;
}
