import NewRubinotRulesKeywordPage, { generateMetadata } from './new-rubinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRubinotRulesKeywordPage />;
}
