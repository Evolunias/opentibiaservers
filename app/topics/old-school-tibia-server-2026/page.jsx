import OldSchoolTibiaServer2026KeywordPage, { generateMetadata } from './old-school-tibia-server-2026';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServer2026KeywordPage />;
}
