import LowrateOlderaRulesKeywordPage, { generateMetadata } from './lowrate-oldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOlderaRulesKeywordPage />;
}
