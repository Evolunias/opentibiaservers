import BestTibiascapeLoginKeywordPage, { generateMetadata } from './best-tibiascape-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiascapeLoginKeywordPage />;
}
