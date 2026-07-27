import BestLumineraRulesKeywordPage, { generateMetadata } from './best-luminera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestLumineraRulesKeywordPage />;
}
