import OldSchoolTibiantisCreateAccountKeywordPage, { generateMetadata } from './old-school-tibiantis-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiantisCreateAccountKeywordPage />;
}
