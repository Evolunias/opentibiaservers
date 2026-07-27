import OldSchoolMarolaotTibiaKeywordPage, { generateMetadata } from './old-school-marolaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMarolaotTibiaKeywordPage />;
}
