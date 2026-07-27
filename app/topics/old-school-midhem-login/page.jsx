import OldSchoolMidhemLoginKeywordPage, { generateMetadata } from './old-school-midhem-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMidhemLoginKeywordPage />;
}
