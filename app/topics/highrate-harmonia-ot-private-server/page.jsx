import HighrateHarmoniaOtPrivateServerKeywordPage, { generateMetadata } from './highrate-harmonia-ot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateHarmoniaOtPrivateServerKeywordPage />;
}
