import CurrentEvoluniaRulesKeywordPage, { generateMetadata } from './current-evolunia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoluniaRulesKeywordPage />;
}
