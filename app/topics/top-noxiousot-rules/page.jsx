import TopNoxiousotRulesKeywordPage, { generateMetadata } from './top-noxiousot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNoxiousotRulesKeywordPage />;
}
