import TopRealeraRulesKeywordPage, { generateMetadata } from './top-realera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealeraRulesKeywordPage />;
}
