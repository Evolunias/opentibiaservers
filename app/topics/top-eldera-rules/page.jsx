import TopElderaRulesKeywordPage, { generateMetadata } from './top-eldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopElderaRulesKeywordPage />;
}
