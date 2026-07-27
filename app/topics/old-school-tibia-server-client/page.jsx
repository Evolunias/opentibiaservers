import OldSchoolTibiaServerClientKeywordPage, { generateMetadata } from './old-school-tibia-server-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerClientKeywordPage />;
}
