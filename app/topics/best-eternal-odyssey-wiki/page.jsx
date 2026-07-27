import BestEternalOdysseyWikiKeywordPage, { generateMetadata } from './best-eternal-odyssey-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEternalOdysseyWikiKeywordPage />;
}
