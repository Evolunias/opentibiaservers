import OldSchoolDuraOnlineOtKeywordPage, { generateMetadata } from './old-school-dura-online-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDuraOnlineOtKeywordPage />;
}
