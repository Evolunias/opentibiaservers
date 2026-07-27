import OldSchoolDuraOnlinePrivateServerKeywordPage, { generateMetadata } from './old-school-dura-online-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDuraOnlinePrivateServerKeywordPage />;
}
