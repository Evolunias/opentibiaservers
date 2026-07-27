import BestRealeraRulesKeywordPage, { generateMetadata } from './best-realera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealeraRulesKeywordPage />;
}
