import TopTibianusWikiKeywordPage, { generateMetadata } from './top-tibianus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibianusWikiKeywordPage />;
}
