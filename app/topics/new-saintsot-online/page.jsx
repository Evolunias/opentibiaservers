import NewSaintsotOnlineKeywordPage, { generateMetadata } from './new-saintsot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSaintsotOnlineKeywordPage />;
}
