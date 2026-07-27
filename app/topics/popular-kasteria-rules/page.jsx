import PopularKasteriaRulesKeywordPage, { generateMetadata } from './popular-kasteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularKasteriaRulesKeywordPage />;
}
