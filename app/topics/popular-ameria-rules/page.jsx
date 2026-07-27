import PopularAmeriaRulesKeywordPage, { generateMetadata } from './popular-ameria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAmeriaRulesKeywordPage />;
}
