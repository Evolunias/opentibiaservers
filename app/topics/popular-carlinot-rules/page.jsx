import PopularCarlinotRulesKeywordPage, { generateMetadata } from './popular-carlinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCarlinotRulesKeywordPage />;
}
