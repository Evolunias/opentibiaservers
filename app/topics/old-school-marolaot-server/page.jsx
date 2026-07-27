import OldSchoolMarolaotServerKeywordPage, { generateMetadata } from './old-school-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMarolaotServerKeywordPage />;
}
