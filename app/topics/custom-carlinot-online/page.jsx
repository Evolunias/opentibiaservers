import CustomCarlinotOnlineKeywordPage, { generateMetadata } from './custom-carlinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCarlinotOnlineKeywordPage />;
}
