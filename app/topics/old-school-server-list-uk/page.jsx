import OldSchoolServerListUkKeywordPage, { generateMetadata } from './old-school-server-list-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolServerListUkKeywordPage />;
}
