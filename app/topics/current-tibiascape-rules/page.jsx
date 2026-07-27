import CurrentTibiascapeRulesKeywordPage, { generateMetadata } from './current-tibiascape-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiascapeRulesKeywordPage />;
}
