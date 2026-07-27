import OldSchoolEvoluniaTibiaKeywordPage, { generateMetadata } from './old-school-evolunia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaTibiaKeywordPage />;
}
