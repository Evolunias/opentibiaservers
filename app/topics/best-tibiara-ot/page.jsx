import BestTibiaraOtKeywordPage, { generateMetadata } from './best-tibiara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaraOtKeywordPage />;
}
