import HighrateHarmoniaOtServerKeywordPage, { generateMetadata } from './highrate-harmonia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateHarmoniaOtServerKeywordPage />;
}
