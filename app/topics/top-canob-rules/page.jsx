import TopCanobRulesKeywordPage, { generateMetadata } from './top-canob-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCanobRulesKeywordPage />;
}
