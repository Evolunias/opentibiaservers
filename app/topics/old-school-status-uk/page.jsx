import OldSchoolStatusUkKeywordPage, { generateMetadata } from './old-school-status-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolStatusUkKeywordPage />;
}
