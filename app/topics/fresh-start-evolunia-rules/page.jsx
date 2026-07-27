import FreshStartEvoluniaRulesKeywordPage, { generateMetadata } from './fresh-start-evolunia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEvoluniaRulesKeywordPage />;
}
