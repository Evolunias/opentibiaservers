import PopularAlasteraRulesKeywordPage, { generateMetadata } from './popular-alastera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAlasteraRulesKeywordPage />;
}
