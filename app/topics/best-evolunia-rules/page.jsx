import BestEvoluniaRulesKeywordPage, { generateMetadata } from './best-evolunia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoluniaRulesKeywordPage />;
}
