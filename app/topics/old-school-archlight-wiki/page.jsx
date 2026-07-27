import OldSchoolArchlightWikiKeywordPage, { generateMetadata } from './old-school-archlight-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArchlightWikiKeywordPage />;
}
