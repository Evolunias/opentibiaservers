import OldSchoolMidhemGuideKeywordPage, { generateMetadata } from './old-school-midhem-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMidhemGuideKeywordPage />;
}
