import OldSchoolTibiaraOtsKeywordPage, { generateMetadata } from './old-school-tibiara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaraOtsKeywordPage />;
}
