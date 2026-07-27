import NewHarmoniaOtWikiKeywordPage, { generateMetadata } from './new-harmonia-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewHarmoniaOtWikiKeywordPage />;
}
