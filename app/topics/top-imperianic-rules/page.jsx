import TopImperianicRulesKeywordPage, { generateMetadata } from './top-imperianic-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopImperianicRulesKeywordPage />;
}
