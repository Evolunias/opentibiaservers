import CurrentRealeraRulesKeywordPage, { generateMetadata } from './current-realera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealeraRulesKeywordPage />;
}
