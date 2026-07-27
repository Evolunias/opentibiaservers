import AlasteraRulesKeywordPage, { generateMetadata } from './alastera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraRulesKeywordPage />;
}
