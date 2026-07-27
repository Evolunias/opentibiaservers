import OldSchoolMiracleOpenTibiaKeywordPage, { generateMetadata } from './old-school-miracle-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMiracleOpenTibiaKeywordPage />;
}
