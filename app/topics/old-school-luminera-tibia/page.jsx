import OldSchoolLumineraTibiaKeywordPage, { generateMetadata } from './old-school-luminera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLumineraTibiaKeywordPage />;
}
