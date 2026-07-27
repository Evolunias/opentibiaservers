import OldSchoolAmeriaLoginKeywordPage, { generateMetadata } from './old-school-ameria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAmeriaLoginKeywordPage />;
}
