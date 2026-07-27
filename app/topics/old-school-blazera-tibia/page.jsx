import OldSchoolBlazeraTibiaKeywordPage, { generateMetadata } from './old-school-blazera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBlazeraTibiaKeywordPage />;
}
