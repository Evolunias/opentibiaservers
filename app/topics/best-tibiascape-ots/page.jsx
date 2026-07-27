import BestTibiascapeOtsKeywordPage, { generateMetadata } from './best-tibiascape-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiascapeOtsKeywordPage />;
}
