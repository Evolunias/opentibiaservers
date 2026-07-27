import BestMidhemRulesKeywordPage, { generateMetadata } from './best-midhem-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMidhemRulesKeywordPage />;
}
