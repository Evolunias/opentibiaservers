import HarmoniaOtOldSchoolServerFranceKeywordPage, { generateMetadata } from './harmonia-ot-old-school-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtOldSchoolServerFranceKeywordPage />;
}
