import OldSchoolMidhemOtServerKeywordPage, { generateMetadata } from './old-school-midhem-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMidhemOtServerKeywordPage />;
}
