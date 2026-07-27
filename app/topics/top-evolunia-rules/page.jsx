import TopEvoluniaRulesKeywordPage, { generateMetadata } from './top-evolunia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoluniaRulesKeywordPage />;
}
