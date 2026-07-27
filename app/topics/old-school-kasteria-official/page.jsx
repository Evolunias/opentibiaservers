import OldSchoolKasteriaOfficialKeywordPage, { generateMetadata } from './old-school-kasteria-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolKasteriaOfficialKeywordPage />;
}
