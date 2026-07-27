import PopularUnlineWikiKeywordPage, { generateMetadata } from './popular-unline-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularUnlineWikiKeywordPage />;
}
