import VenoreotRulesKeywordPage, { generateMetadata } from './venoreot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotRulesKeywordPage />;
}
