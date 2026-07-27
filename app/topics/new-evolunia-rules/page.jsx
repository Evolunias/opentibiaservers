import NewEvoluniaRulesKeywordPage, { generateMetadata } from './new-evolunia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoluniaRulesKeywordPage />;
}
