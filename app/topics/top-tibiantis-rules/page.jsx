import TopTibiantisRulesKeywordPage, { generateMetadata } from './top-tibiantis-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiantisRulesKeywordPage />;
}
