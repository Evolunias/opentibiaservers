import NewTibiantisRulesKeywordPage, { generateMetadata } from './new-tibiantis-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiantisRulesKeywordPage />;
}
