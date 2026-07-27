import OldSchoolTibiantisWebsiteKeywordPage, { generateMetadata } from './old-school-tibiantis-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiantisWebsiteKeywordPage />;
}
