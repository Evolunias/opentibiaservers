import BestHarmoniaOtClientKeywordPage, { generateMetadata } from './best-harmonia-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestHarmoniaOtClientKeywordPage />;
}
