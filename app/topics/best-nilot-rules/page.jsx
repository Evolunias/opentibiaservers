import BestNilotRulesKeywordPage, { generateMetadata } from './best-nilot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNilotRulesKeywordPage />;
}
