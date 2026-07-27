import OldSchoolMidhemServerKeywordPage, { generateMetadata } from './old-school-midhem-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMidhemServerKeywordPage />;
}
