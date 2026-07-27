import OldSchoolGuideUsaKeywordPage, { generateMetadata } from './old-school-guide-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGuideUsaKeywordPage />;
}
