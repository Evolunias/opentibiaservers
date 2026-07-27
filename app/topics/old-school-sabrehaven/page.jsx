import OldSchoolSabrehavenKeywordPage, { generateMetadata } from './old-school-sabrehaven';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSabrehavenKeywordPage />;
}
