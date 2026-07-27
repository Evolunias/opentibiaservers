import OldSchoolMidhemOpenTibiaKeywordPage, { generateMetadata } from './old-school-midhem-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMidhemOpenTibiaKeywordPage />;
}
