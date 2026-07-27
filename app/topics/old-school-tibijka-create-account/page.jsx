import OldSchoolTibijkaCreateAccountKeywordPage, { generateMetadata } from './old-school-tibijka-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibijkaCreateAccountKeywordPage />;
}
