import TopEternalOdysseyWikiKeywordPage, { generateMetadata } from './top-eternal-odyssey-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEternalOdysseyWikiKeywordPage />;
}
