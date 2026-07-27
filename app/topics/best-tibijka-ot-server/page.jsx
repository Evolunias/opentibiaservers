import BestTibijkaOtServerKeywordPage, { generateMetadata } from './best-tibijka-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibijkaOtServerKeywordPage />;
}
