import PopularNoxiousotRulesKeywordPage, { generateMetadata } from './popular-noxiousot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNoxiousotRulesKeywordPage />;
}
