import TopHarmoniaOtGuideKeywordPage, { generateMetadata } from './top-harmonia-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopHarmoniaOtGuideKeywordPage />;
}
