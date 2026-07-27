import OldSchoolNepreniaTibiaKeywordPage, { generateMetadata } from './old-school-neprenia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNepreniaTibiaKeywordPage />;
}
