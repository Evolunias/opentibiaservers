import LowrateNoxiousotRulesKeywordPage, { generateMetadata } from './lowrate-noxiousot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNoxiousotRulesKeywordPage />;
}
