import OldSchoolGuideLatinAmericaKeywordPage, { generateMetadata } from './old-school-guide-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGuideLatinAmericaKeywordPage />;
}
