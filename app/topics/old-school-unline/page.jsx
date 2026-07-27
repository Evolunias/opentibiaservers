import OldSchoolUnlineKeywordPage, { generateMetadata } from './old-school-unline';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolUnlineKeywordPage />;
}
