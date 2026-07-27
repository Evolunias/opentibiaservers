import HarmoniaOtSwedenServerKeywordPage, { generateMetadata } from './harmonia-ot-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtSwedenServerKeywordPage />;
}
