import CustomHarmoniaOtWebsiteKeywordPage, { generateMetadata } from './custom-harmonia-ot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomHarmoniaOtWebsiteKeywordPage />;
}
