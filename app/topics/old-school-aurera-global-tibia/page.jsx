import OldSchoolAureraGlobalTibiaKeywordPage, { generateMetadata } from './old-school-aurera-global-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAureraGlobalTibiaKeywordPage />;
}
