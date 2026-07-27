import BestTibiaOtServerKeywordPage, { generateMetadata } from './best-tibia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaOtServerKeywordPage />;
}
