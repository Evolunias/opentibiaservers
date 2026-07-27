import OldSchoolMarolaotClientKeywordPage, { generateMetadata } from './old-school-marolaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMarolaotClientKeywordPage />;
}
