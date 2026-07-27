import OldSchoolSabrehavenClientKeywordPage, { generateMetadata } from './old-school-sabrehaven-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSabrehavenClientKeywordPage />;
}
