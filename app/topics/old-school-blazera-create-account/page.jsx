import OldSchoolBlazeraCreateAccountKeywordPage, { generateMetadata } from './old-school-blazera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBlazeraCreateAccountKeywordPage />;
}
