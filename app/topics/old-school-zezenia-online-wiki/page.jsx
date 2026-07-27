import OldSchoolZezeniaOnlineWikiKeywordPage, { generateMetadata } from './old-school-zezenia-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZezeniaOnlineWikiKeywordPage />;
}
