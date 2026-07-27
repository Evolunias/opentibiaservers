import PopularNtoStarRulesKeywordPage, { generateMetadata } from './popular-nto-star-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNtoStarRulesKeywordPage />;
}
