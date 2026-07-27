import LowrateNepreniaRulesKeywordPage, { generateMetadata } from './lowrate-neprenia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNepreniaRulesKeywordPage />;
}
