import CurrentNtoStarRulesKeywordPage, { generateMetadata } from './current-nto-star-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNtoStarRulesKeywordPage />;
}
