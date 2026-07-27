import TopHarmoniaOtWikiKeywordPage, { generateMetadata } from './top-harmonia-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopHarmoniaOtWikiKeywordPage />;
}
