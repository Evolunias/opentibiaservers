import OldSchoolThorniaCreateAccountKeywordPage, { generateMetadata } from './old-school-thornia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThorniaCreateAccountKeywordPage />;
}
