import HighrateNoxiousotWikiKeywordPage, { generateMetadata } from './highrate-noxiousot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNoxiousotWikiKeywordPage />;
}
