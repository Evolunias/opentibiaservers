import CustomNoxiousotOnlineKeywordPage, { generateMetadata } from './custom-noxiousot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNoxiousotOnlineKeywordPage />;
}
