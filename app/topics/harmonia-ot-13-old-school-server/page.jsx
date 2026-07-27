import HarmoniaOt13OldSchoolServerKeywordPage, { generateMetadata } from './harmonia-ot-13-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt13OldSchoolServerKeywordPage />;
}
