import LowrateNoxiousotWebsiteKeywordPage, { generateMetadata } from './lowrate-noxiousot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNoxiousotWebsiteKeywordPage />;
}
