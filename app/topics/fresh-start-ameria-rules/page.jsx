import FreshStartAmeriaRulesKeywordPage, { generateMetadata } from './fresh-start-ameria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAmeriaRulesKeywordPage />;
}
