import TibiantisRulesKeywordPage, { generateMetadata } from './tibiantis-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisRulesKeywordPage />;
}
