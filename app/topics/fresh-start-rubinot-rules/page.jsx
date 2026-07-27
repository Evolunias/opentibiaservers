import FreshStartRubinotRulesKeywordPage, { generateMetadata } from './fresh-start-rubinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRubinotRulesKeywordPage />;
}
