import OldSchoolArcaniarlKeywordPage, { generateMetadata } from './old-school-arcaniarl';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArcaniarlKeywordPage />;
}
