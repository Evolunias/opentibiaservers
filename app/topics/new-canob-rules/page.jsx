import NewCanobRulesKeywordPage, { generateMetadata } from './new-canob-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCanobRulesKeywordPage />;
}
