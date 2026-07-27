import OldSchoolArcaniarlRegisterKeywordPage, { generateMetadata } from './old-school-arcaniarl-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArcaniarlRegisterKeywordPage />;
}
