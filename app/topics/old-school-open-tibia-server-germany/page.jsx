import OldSchoolOpenTibiaServerGermanyKeywordPage, { generateMetadata } from './old-school-open-tibia-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOpenTibiaServerGermanyKeywordPage />;
}
