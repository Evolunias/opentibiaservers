import PopularNostaltherRulesKeywordPage, { generateMetadata } from './popular-nostalther-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNostaltherRulesKeywordPage />;
}
