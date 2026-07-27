import OldSchoolArcaniarlCreateAccountKeywordPage, { generateMetadata } from './old-school-arcaniarl-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArcaniarlCreateAccountKeywordPage />;
}
