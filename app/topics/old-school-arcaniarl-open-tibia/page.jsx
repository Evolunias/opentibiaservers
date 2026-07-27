import OldSchoolArcaniarlOpenTibiaKeywordPage, { generateMetadata } from './old-school-arcaniarl-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArcaniarlOpenTibiaKeywordPage />;
}
