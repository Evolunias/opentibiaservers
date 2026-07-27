import OldSchoolCalmeraOtServerKeywordPage, { generateMetadata } from './old-school-calmera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCalmeraOtServerKeywordPage />;
}
