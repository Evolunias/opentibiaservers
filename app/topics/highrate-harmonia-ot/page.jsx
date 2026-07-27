import HighrateHarmoniaOtKeywordPage, { generateMetadata } from './highrate-harmonia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateHarmoniaOtKeywordPage />;
}
