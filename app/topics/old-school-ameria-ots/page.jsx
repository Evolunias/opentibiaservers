import OldSchoolAmeriaOtsKeywordPage, { generateMetadata } from './old-school-ameria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAmeriaOtsKeywordPage />;
}
