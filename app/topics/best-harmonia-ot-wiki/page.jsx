import BestHarmoniaOtWikiKeywordPage, { generateMetadata } from './best-harmonia-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestHarmoniaOtWikiKeywordPage />;
}
