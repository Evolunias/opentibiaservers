import NewClassicusRulesKeywordPage, { generateMetadata } from './new-classicus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewClassicusRulesKeywordPage />;
}
