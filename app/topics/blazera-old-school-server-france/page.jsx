import BlazeraOldSchoolServerFranceKeywordPage, { generateMetadata } from './blazera-old-school-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraOldSchoolServerFranceKeywordPage />;
}
