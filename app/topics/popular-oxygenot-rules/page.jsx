import PopularOxygenotRulesKeywordPage, { generateMetadata } from './popular-oxygenot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOxygenotRulesKeywordPage />;
}
