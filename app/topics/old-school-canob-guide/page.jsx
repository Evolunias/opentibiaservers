import OldSchoolCanobGuideKeywordPage, { generateMetadata } from './old-school-canob-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCanobGuideKeywordPage />;
}
