import HarmoniaOt15OldSchoolServerKeywordPage, { generateMetadata } from './harmonia-ot-15-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt15OldSchoolServerKeywordPage />;
}
