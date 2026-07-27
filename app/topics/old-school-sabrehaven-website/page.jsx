import OldSchoolSabrehavenWebsiteKeywordPage, { generateMetadata } from './old-school-sabrehaven-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSabrehavenWebsiteKeywordPage />;
}
