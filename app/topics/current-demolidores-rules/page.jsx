import CurrentDemolidoresRulesKeywordPage, { generateMetadata } from './current-demolidores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDemolidoresRulesKeywordPage />;
}
