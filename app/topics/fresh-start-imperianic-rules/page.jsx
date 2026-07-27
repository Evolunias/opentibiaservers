import FreshStartImperianicRulesKeywordPage, { generateMetadata } from './fresh-start-imperianic-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartImperianicRulesKeywordPage />;
}
