import OldSchoolEvoleraTibiaKeywordPage, { generateMetadata } from './old-school-evolera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoleraTibiaKeywordPage />;
}
