import BestTibianusServerKeywordPage, { generateMetadata } from './best-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibianusServerKeywordPage />;
}
