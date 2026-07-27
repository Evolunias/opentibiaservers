import BlazeraOldSchoolServerMexicoKeywordPage, { generateMetadata } from './blazera-old-school-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraOldSchoolServerMexicoKeywordPage />;
}
