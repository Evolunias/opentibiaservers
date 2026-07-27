import PopularNepreniaRulesKeywordPage, { generateMetadata } from './popular-neprenia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNepreniaRulesKeywordPage />;
}
