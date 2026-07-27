import CurrentAureraGlobalRulesKeywordPage, { generateMetadata } from './current-aurera-global-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAureraGlobalRulesKeywordPage />;
}
