import TopRubinotRulesKeywordPage, { generateMetadata } from './top-rubinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRubinotRulesKeywordPage />;
}
