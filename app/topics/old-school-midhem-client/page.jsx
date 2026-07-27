import OldSchoolMidhemClientKeywordPage, { generateMetadata } from './old-school-midhem-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMidhemClientKeywordPage />;
}
