import OldSchoolMiracleTibiaKeywordPage, { generateMetadata } from './old-school-miracle-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMiracleTibiaKeywordPage />;
}
