import OldSchoolSabrehavenOtKeywordPage, { generateMetadata } from './old-school-sabrehaven-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSabrehavenOtKeywordPage />;
}
