import OldSchoolStatusLatinAmericaKeywordPage, { generateMetadata } from './old-school-status-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolStatusLatinAmericaKeywordPage />;
}
