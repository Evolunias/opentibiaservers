import OldSchoolMidhemRegisterKeywordPage, { generateMetadata } from './old-school-midhem-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMidhemRegisterKeywordPage />;
}
