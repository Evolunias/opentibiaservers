import PopularYurotsRulesKeywordPage, { generateMetadata } from './popular-yurots-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularYurotsRulesKeywordPage />;
}
