import OldSchoolArcaniarlGuideKeywordPage, { generateMetadata } from './old-school-arcaniarl-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArcaniarlGuideKeywordPage />;
}
