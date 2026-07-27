import OldSchoolOxygenotKeywordPage, { generateMetadata } from './old-school-oxygenot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOxygenotKeywordPage />;
}
