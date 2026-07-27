import CustomHarmoniaOtGuideKeywordPage, { generateMetadata } from './custom-harmonia-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomHarmoniaOtGuideKeywordPage />;
}
