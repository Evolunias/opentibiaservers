import HighrateHarmoniaOtWikiKeywordPage, { generateMetadata } from './highrate-harmonia-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateHarmoniaOtWikiKeywordPage />;
}
