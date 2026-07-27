import NewTibiascapeRulesKeywordPage, { generateMetadata } from './new-tibiascape-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiascapeRulesKeywordPage />;
}
