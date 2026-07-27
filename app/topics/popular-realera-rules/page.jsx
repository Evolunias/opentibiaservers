import PopularRealeraRulesKeywordPage, { generateMetadata } from './popular-realera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealeraRulesKeywordPage />;
}
