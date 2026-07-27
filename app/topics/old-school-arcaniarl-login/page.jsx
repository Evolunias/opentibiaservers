import OldSchoolArcaniarlLoginKeywordPage, { generateMetadata } from './old-school-arcaniarl-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArcaniarlLoginKeywordPage />;
}
