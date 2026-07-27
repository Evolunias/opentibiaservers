import OldSchoolTibiantisOnlineKeywordPage, { generateMetadata } from './old-school-tibiantis-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiantisOnlineKeywordPage />;
}
