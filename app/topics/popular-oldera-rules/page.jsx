import PopularOlderaRulesKeywordPage, { generateMetadata } from './popular-oldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOlderaRulesKeywordPage />;
}
