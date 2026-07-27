import OldSchoolDuraOnlineWikiKeywordPage, { generateMetadata } from './old-school-dura-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDuraOnlineWikiKeywordPage />;
}
