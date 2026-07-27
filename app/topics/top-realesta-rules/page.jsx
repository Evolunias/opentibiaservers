import TopRealestaRulesKeywordPage, { generateMetadata } from './top-realesta-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealestaRulesKeywordPage />;
}
