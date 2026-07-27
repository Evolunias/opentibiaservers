import BestTibianusClientKeywordPage, { generateMetadata } from './best-tibianus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibianusClientKeywordPage />;
}
