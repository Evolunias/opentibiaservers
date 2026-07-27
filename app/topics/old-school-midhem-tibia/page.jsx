import OldSchoolMidhemTibiaKeywordPage, { generateMetadata } from './old-school-midhem-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMidhemTibiaKeywordPage />;
}
