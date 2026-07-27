import LowrateKasteriaRulesKeywordPage, { generateMetadata } from './lowrate-kasteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaRulesKeywordPage />;
}
