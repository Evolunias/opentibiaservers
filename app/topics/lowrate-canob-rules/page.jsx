import LowrateCanobRulesKeywordPage, { generateMetadata } from './lowrate-canob-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCanobRulesKeywordPage />;
}
