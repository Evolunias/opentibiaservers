import LowrateAlasteraRulesKeywordPage, { generateMetadata } from './lowrate-alastera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAlasteraRulesKeywordPage />;
}
