import PopularYurotsWikiKeywordPage, { generateMetadata } from './popular-yurots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularYurotsWikiKeywordPage />;
}
