import HarmoniaOt100OldSchoolServerKeywordPage, { generateMetadata } from './harmonia-ot-10-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt100OldSchoolServerKeywordPage />;
}
