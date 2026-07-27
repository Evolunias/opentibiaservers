import OfficialTibijkaRulesKeywordPage, { generateMetadata } from './official-tibijka-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibijkaRulesKeywordPage />;
}
