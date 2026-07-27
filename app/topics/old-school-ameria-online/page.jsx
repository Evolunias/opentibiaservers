import OldSchoolAmeriaOnlineKeywordPage, { generateMetadata } from './old-school-ameria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAmeriaOnlineKeywordPage />;
}
