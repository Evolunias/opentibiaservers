import CustomSaintsotOnlineKeywordPage, { generateMetadata } from './custom-saintsot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSaintsotOnlineKeywordPage />;
}
