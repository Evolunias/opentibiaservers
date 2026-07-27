import OldSchoolElderaCreateAccountKeywordPage, { generateMetadata } from './old-school-eldera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolElderaCreateAccountKeywordPage />;
}
