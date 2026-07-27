import CurrentElderaRulesKeywordPage, { generateMetadata } from './current-eldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentElderaRulesKeywordPage />;
}
