import MediviaOldSchoolServerUkKeywordPage, { generateMetadata } from './medivia-old-school-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaOldSchoolServerUkKeywordPage />;
}
