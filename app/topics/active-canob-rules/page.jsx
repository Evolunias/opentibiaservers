import ActiveCanobRulesKeywordPage, { generateMetadata } from './active-canob-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCanobRulesKeywordPage />;
}
