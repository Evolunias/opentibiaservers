import HarmoniaOt12OldSchoolServerKeywordPage, { generateMetadata } from './harmonia-ot-12-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt12OldSchoolServerKeywordPage />;
}
