import LowrateElderaRulesKeywordPage, { generateMetadata } from './lowrate-eldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateElderaRulesKeywordPage />;
}
