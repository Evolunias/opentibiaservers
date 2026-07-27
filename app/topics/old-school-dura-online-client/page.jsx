import OldSchoolDuraOnlineClientKeywordPage, { generateMetadata } from './old-school-dura-online-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDuraOnlineClientKeywordPage />;
}
