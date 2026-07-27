import OldSchoolArcaniarlClientKeywordPage, { generateMetadata } from './old-school-arcaniarl-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArcaniarlClientKeywordPage />;
}
