import OldSchoolCoxaotOfficialKeywordPage, { generateMetadata } from './old-school-coxaot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCoxaotOfficialKeywordPage />;
}
