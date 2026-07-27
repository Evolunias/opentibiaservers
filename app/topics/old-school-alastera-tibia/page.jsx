import OldSchoolAlasteraTibiaKeywordPage, { generateMetadata } from './old-school-alastera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAlasteraTibiaKeywordPage />;
}
