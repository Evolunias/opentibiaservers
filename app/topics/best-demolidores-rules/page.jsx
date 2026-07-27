import BestDemolidoresRulesKeywordPage, { generateMetadata } from './best-demolidores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestDemolidoresRulesKeywordPage />;
}
