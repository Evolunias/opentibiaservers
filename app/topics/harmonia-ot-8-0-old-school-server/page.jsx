import HarmoniaOt80OldSchoolServerKeywordPage, { generateMetadata } from './harmonia-ot-8-0-old-school-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt80OldSchoolServerKeywordPage />;
}
