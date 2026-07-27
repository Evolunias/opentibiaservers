import OldSchoolServerLatinAmericaKeywordPage, { generateMetadata } from './old-school-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolServerLatinAmericaKeywordPage />;
}
