import EvoluniaRulesKeywordPage, { generateMetadata } from './evolunia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaRulesKeywordPage />;
}
