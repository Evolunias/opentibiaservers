import LowrateOriginaltibiaRulesKeywordPage, { generateMetadata } from './lowrate-originaltibia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOriginaltibiaRulesKeywordPage />;
}
