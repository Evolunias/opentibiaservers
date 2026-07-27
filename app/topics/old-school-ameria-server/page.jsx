import OldSchoolAmeriaServerKeywordPage, { generateMetadata } from './old-school-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAmeriaServerKeywordPage />;
}
