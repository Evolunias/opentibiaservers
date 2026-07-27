import OldSchoolServersLatinAmericaKeywordPage, { generateMetadata } from './old-school-servers-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolServersLatinAmericaKeywordPage />;
}
