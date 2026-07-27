import OldSchoolTibiaServerGermanyKeywordPage, { generateMetadata } from './old-school-tibia-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerGermanyKeywordPage />;
}
