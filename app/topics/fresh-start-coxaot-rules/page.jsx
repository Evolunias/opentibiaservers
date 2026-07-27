import FreshStartCoxaotRulesKeywordPage, { generateMetadata } from './fresh-start-coxaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCoxaotRulesKeywordPage />;
}
