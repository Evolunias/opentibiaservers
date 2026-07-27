import OfficialHarmoniaOtGuideKeywordPage, { generateMetadata } from './official-harmonia-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialHarmoniaOtGuideKeywordPage />;
}
