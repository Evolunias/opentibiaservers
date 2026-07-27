import BestClassicusRulesKeywordPage, { generateMetadata } from './best-classicus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestClassicusRulesKeywordPage />;
}
