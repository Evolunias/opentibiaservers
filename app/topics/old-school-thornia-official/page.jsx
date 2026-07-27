import OldSchoolThorniaOfficialKeywordPage, { generateMetadata } from './old-school-thornia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThorniaOfficialKeywordPage />;
}
