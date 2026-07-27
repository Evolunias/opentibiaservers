import OldSchoolTibiantisLoginKeywordPage, { generateMetadata } from './old-school-tibiantis-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiantisLoginKeywordPage />;
}
