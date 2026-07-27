import BestBlazeraRulesKeywordPage, { generateMetadata } from './best-blazera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestBlazeraRulesKeywordPage />;
}
