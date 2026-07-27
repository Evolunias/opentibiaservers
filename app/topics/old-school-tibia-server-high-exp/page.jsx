import OldSchoolTibiaServerHighExpKeywordPage, { generateMetadata } from './old-school-tibia-server-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerHighExpKeywordPage />;
}
