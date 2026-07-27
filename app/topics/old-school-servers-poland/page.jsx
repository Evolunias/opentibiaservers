import OldSchoolServersPolandKeywordPage, { generateMetadata } from './old-school-servers-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolServersPolandKeywordPage />;
}
