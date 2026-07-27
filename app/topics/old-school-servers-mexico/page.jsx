import OldSchoolServersMexicoKeywordPage, { generateMetadata } from './old-school-servers-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolServersMexicoKeywordPage />;
}
