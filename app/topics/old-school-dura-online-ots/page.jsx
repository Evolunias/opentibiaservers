import OldSchoolDuraOnlineOtsKeywordPage, { generateMetadata } from './old-school-dura-online-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDuraOnlineOtsKeywordPage />;
}
