import HighrateHarmoniaOtWebsiteKeywordPage, { generateMetadata } from './highrate-harmonia-ot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateHarmoniaOtWebsiteKeywordPage />;
}
