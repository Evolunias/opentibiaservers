import MediviaOldSchoolServerPolandKeywordPage, { generateMetadata } from './medivia-old-school-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaOldSchoolServerPolandKeywordPage />;
}
