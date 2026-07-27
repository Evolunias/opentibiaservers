import OldSchoolTibiaServerListKeywordPage, { generateMetadata } from './old-school-tibia-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerListKeywordPage />;
}
