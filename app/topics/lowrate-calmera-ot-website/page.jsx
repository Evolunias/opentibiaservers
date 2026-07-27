import LowrateCalmeraOtWebsiteKeywordPage, { generateMetadata } from './lowrate-calmera-ot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCalmeraOtWebsiteKeywordPage />;
}
