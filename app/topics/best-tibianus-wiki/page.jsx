import BestTibianusWikiKeywordPage, { generateMetadata } from './best-tibianus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibianusWikiKeywordPage />;
}
