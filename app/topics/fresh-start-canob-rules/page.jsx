import FreshStartCanobRulesKeywordPage, { generateMetadata } from './fresh-start-canob-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCanobRulesKeywordPage />;
}
