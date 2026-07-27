import OldSchoolAlasteraOnlineKeywordPage, { generateMetadata } from './old-school-alastera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAlasteraOnlineKeywordPage />;
}
