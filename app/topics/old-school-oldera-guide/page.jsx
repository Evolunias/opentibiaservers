import OldSchoolOlderaGuideKeywordPage, { generateMetadata } from './old-school-oldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOlderaGuideKeywordPage />;
}
