import OldSchoolClassicusOfficialKeywordPage, { generateMetadata } from './old-school-classicus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassicusOfficialKeywordPage />;
}
