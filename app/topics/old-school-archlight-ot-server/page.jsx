import OldSchoolArchlightOtServerKeywordPage, { generateMetadata } from './old-school-archlight-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArchlightOtServerKeywordPage />;
}
