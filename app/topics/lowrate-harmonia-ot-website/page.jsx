import LowrateHarmoniaOtWebsiteKeywordPage, { generateMetadata } from './lowrate-harmonia-ot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateHarmoniaOtWebsiteKeywordPage />;
}
