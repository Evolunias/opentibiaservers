import OldSchoolSabrehavenOtsKeywordPage, { generateMetadata } from './old-school-sabrehaven-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSabrehavenOtsKeywordPage />;
}
