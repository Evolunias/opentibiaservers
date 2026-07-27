import HighrateTibiascapeRulesKeywordPage, { generateMetadata } from './highrate-tibiascape-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiascapeRulesKeywordPage />;
}
