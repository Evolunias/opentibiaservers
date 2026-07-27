import OldSchoolSabrehavenLoginKeywordPage, { generateMetadata } from './old-school-sabrehaven-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSabrehavenLoginKeywordPage />;
}
