import OldSchoolOtServerLatinAmericaKeywordPage, { generateMetadata } from './old-school-ot-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtServerLatinAmericaKeywordPage />;
}
