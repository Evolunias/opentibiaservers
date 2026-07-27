import BestTibiascapeOtKeywordPage, { generateMetadata } from './best-tibiascape-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiascapeOtKeywordPage />;
}
