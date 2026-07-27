import BestTibiascapeServerKeywordPage, { generateMetadata } from './best-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiascapeServerKeywordPage />;
}
