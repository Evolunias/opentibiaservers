import BestThorniaRulesKeywordPage, { generateMetadata } from './best-thornia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThorniaRulesKeywordPage />;
}
