import MistOfDeathRulesKeywordPage, { generateMetadata } from './mist-of-death-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathRulesKeywordPage />;
}
