import OfficialAmeriaRulesKeywordPage, { generateMetadata } from './official-ameria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAmeriaRulesKeywordPage />;
}
