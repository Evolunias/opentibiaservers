import OldSchoolAmeriaOtServerKeywordPage, { generateMetadata } from './old-school-ameria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAmeriaOtServerKeywordPage />;
}
