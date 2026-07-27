import CurrentBlazeraRulesKeywordPage, { generateMetadata } from './current-blazera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentBlazeraRulesKeywordPage />;
}
