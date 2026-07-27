import OldSchoolStatusMexicoKeywordPage, { generateMetadata } from './old-school-status-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolStatusMexicoKeywordPage />;
}
