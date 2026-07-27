import OldSchoolUnlineTibiaKeywordPage, { generateMetadata } from './old-school-unline-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolUnlineTibiaKeywordPage />;
}
