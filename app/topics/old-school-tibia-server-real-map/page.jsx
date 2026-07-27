import OldSchoolTibiaServerRealMapKeywordPage, { generateMetadata } from './old-school-tibia-server-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerRealMapKeywordPage />;
}
