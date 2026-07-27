import OldSchoolNilotOfficialKeywordPage, { generateMetadata } from './old-school-nilot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNilotOfficialKeywordPage />;
}
