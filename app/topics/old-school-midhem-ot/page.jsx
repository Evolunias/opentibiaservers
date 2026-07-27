import OldSchoolMidhemOtKeywordPage, { generateMetadata } from './old-school-midhem-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMidhemOtKeywordPage />;
}
