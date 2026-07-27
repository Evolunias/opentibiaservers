import OldSchoolArchlightPrivateServerKeywordPage, { generateMetadata } from './old-school-archlight-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArchlightPrivateServerKeywordPage />;
}
