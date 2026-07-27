import LowrateNostaltherRulesKeywordPage, { generateMetadata } from './lowrate-nostalther-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNostaltherRulesKeywordPage />;
}
