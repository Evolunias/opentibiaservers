import OldSchoolSaintsotOnlineKeywordPage, { generateMetadata } from './old-school-saintsot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSaintsotOnlineKeywordPage />;
}
