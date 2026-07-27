import OldSchoolServerListPolandKeywordPage, { generateMetadata } from './old-school-server-list-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolServerListPolandKeywordPage />;
}
