import NewDemolidoresRulesKeywordPage, { generateMetadata } from './new-demolidores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDemolidoresRulesKeywordPage />;
}
