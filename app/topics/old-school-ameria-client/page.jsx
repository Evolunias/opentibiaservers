import OldSchoolAmeriaClientKeywordPage, { generateMetadata } from './old-school-ameria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAmeriaClientKeywordPage />;
}
