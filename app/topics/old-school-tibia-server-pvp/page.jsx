import OldSchoolTibiaServerPvpKeywordPage, { generateMetadata } from './old-school-tibia-server-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerPvpKeywordPage />;
}
