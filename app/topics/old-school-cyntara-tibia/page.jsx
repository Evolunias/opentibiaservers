import OldSchoolCyntaraTibiaKeywordPage, { generateMetadata } from './old-school-cyntara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCyntaraTibiaKeywordPage />;
}
