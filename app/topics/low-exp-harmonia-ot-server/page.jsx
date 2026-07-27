import LowExpHarmoniaOtServerKeywordPage, { generateMetadata } from './low-exp-harmonia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpHarmoniaOtServerKeywordPage />;
}
