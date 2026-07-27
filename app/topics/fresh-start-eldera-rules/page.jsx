import FreshStartElderaRulesKeywordPage, { generateMetadata } from './fresh-start-eldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartElderaRulesKeywordPage />;
}
