import LowrateTibiascapeRulesKeywordPage, { generateMetadata } from './lowrate-tibiascape-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiascapeRulesKeywordPage />;
}
