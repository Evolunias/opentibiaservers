import CurrentCanobRulesKeywordPage, { generateMetadata } from './current-canob-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCanobRulesKeywordPage />;
}
