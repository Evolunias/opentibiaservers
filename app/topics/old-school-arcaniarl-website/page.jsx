import OldSchoolArcaniarlWebsiteKeywordPage, { generateMetadata } from './old-school-arcaniarl-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArcaniarlWebsiteKeywordPage />;
}
