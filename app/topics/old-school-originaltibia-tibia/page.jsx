import OldSchoolOriginaltibiaTibiaKeywordPage, { generateMetadata } from './old-school-originaltibia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOriginaltibiaTibiaKeywordPage />;
}
