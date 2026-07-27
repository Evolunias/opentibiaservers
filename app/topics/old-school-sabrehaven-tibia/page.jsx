import OldSchoolSabrehavenTibiaKeywordPage, { generateMetadata } from './old-school-sabrehaven-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSabrehavenTibiaKeywordPage />;
}
