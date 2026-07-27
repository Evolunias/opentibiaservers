import OldSchoolDuraOnlineServerKeywordPage, { generateMetadata } from './old-school-dura-online-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDuraOnlineServerKeywordPage />;
}
