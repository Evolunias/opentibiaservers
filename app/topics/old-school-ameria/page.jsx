import OldSchoolAmeriaKeywordPage, { generateMetadata } from './old-school-ameria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAmeriaKeywordPage />;
}
