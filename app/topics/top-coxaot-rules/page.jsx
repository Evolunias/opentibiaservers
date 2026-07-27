import TopCoxaotRulesKeywordPage, { generateMetadata } from './top-coxaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCoxaotRulesKeywordPage />;
}
