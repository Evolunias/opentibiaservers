import PopularHarmoniaOtWebsiteKeywordPage, { generateMetadata } from './popular-harmonia-ot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularHarmoniaOtWebsiteKeywordPage />;
}
