import TopTibiascapeRulesKeywordPage, { generateMetadata } from './top-tibiascape-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiascapeRulesKeywordPage />;
}
