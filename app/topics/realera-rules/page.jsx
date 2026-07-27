import RealeraRulesKeywordPage, { generateMetadata } from './realera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraRulesKeywordPage />;
}
