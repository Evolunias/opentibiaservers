import LowrateNoxiousotWikiKeywordPage, { generateMetadata } from './lowrate-noxiousot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNoxiousotWikiKeywordPage />;
}
