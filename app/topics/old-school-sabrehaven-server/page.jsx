import OldSchoolSabrehavenServerKeywordPage, { generateMetadata } from './old-school-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSabrehavenServerKeywordPage />;
}
