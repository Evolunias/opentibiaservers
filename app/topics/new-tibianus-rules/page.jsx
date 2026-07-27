import NewTibianusRulesKeywordPage, { generateMetadata } from './new-tibianus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibianusRulesKeywordPage />;
}
