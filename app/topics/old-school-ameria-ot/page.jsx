import OldSchoolAmeriaOtKeywordPage, { generateMetadata } from './old-school-ameria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAmeriaOtKeywordPage />;
}
