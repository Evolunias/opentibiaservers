import OldSchoolSabrehavenOpenTibiaKeywordPage, { generateMetadata } from './old-school-sabrehaven-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSabrehavenOpenTibiaKeywordPage />;
}
