import OldSchoolArchlightOtKeywordPage, { generateMetadata } from './old-school-archlight-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArchlightOtKeywordPage />;
}
