import HighrateNoxiousotWebsiteKeywordPage, { generateMetadata } from './highrate-noxiousot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNoxiousotWebsiteKeywordPage />;
}
