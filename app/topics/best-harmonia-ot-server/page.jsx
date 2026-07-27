import BestHarmoniaOtServerKeywordPage, { generateMetadata } from './best-harmonia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestHarmoniaOtServerKeywordPage />;
}
