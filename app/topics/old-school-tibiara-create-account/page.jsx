import OldSchoolTibiaraCreateAccountKeywordPage, { generateMetadata } from './old-school-tibiara-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaraCreateAccountKeywordPage />;
}
