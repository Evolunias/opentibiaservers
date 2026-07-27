import OldSchoolServerListMexicoKeywordPage, { generateMetadata } from './old-school-server-list-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolServerListMexicoKeywordPage />;
}
