import OldSchoolOtServerMexicoKeywordPage, { generateMetadata } from './old-school-ot-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtServerMexicoKeywordPage />;
}
