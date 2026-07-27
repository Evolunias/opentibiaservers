import HighrateHarmoniaOtClientKeywordPage, { generateMetadata } from './highrate-harmonia-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateHarmoniaOtClientKeywordPage />;
}
