import LowrateAmeriaRulesKeywordPage, { generateMetadata } from './lowrate-ameria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAmeriaRulesKeywordPage />;
}
