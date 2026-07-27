import OldSchoolSerenityCreateAccountKeywordPage, { generateMetadata } from './old-school-serenity-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSerenityCreateAccountKeywordPage />;
}
