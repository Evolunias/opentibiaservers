import OfficialImperianicRulesKeywordPage, { generateMetadata } from './official-imperianic-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialImperianicRulesKeywordPage />;
}
