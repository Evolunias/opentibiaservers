import OldSchoolOxygenotLoginKeywordPage, { generateMetadata } from './old-school-oxygenot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOxygenotLoginKeywordPage />;
}
