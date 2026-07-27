import OldSchoolMediviaTibiaKeywordPage, { generateMetadata } from './old-school-medivia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMediviaTibiaKeywordPage />;
}
