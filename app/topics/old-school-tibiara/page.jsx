import OldSchoolTibiaraKeywordPage, { generateMetadata } from './old-school-tibiara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaraKeywordPage />;
}
