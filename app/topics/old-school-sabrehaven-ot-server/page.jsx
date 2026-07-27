import OldSchoolSabrehavenOtServerKeywordPage, { generateMetadata } from './old-school-sabrehaven-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSabrehavenOtServerKeywordPage />;
}
