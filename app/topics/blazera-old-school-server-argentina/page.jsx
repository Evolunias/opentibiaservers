import BlazeraOldSchoolServerArgentinaKeywordPage, { generateMetadata } from './blazera-old-school-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraOldSchoolServerArgentinaKeywordPage />;
}
