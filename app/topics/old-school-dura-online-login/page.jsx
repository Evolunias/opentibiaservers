import OldSchoolDuraOnlineLoginKeywordPage, { generateMetadata } from './old-school-dura-online-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDuraOnlineLoginKeywordPage />;
}
