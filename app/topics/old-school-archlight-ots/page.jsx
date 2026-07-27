import OldSchoolArchlightOtsKeywordPage, { generateMetadata } from './old-school-archlight-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArchlightOtsKeywordPage />;
}
