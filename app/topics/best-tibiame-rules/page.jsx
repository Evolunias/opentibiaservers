import BestTibiameRulesKeywordPage, { generateMetadata } from './best-tibiame-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiameRulesKeywordPage />;
}
