import OldSchoolTibiaServerNonPvpKeywordPage, { generateMetadata } from './old-school-tibia-server-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerNonPvpKeywordPage />;
}
