import NoxiousotOnlineKeywordPage, { generateMetadata } from './noxiousot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotOnlineKeywordPage />;
}
