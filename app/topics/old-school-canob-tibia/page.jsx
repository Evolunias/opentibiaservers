import OldSchoolCanobTibiaKeywordPage, { generateMetadata } from './old-school-canob-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCanobTibiaKeywordPage />;
}
