import ActiveHarmoniaOtGuideKeywordPage, { generateMetadata } from './active-harmonia-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveHarmoniaOtGuideKeywordPage />;
}
