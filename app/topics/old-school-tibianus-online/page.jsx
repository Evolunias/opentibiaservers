import OldSchoolTibianusOnlineKeywordPage, { generateMetadata } from './old-school-tibianus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibianusOnlineKeywordPage />;
}
