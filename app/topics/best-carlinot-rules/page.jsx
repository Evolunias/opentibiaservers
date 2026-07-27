import BestCarlinotRulesKeywordPage, { generateMetadata } from './best-carlinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCarlinotRulesKeywordPage />;
}
