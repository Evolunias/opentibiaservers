import TopDemolidoresRulesKeywordPage, { generateMetadata } from './top-demolidores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDemolidoresRulesKeywordPage />;
}
