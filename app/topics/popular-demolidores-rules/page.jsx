import PopularDemolidoresRulesKeywordPage, { generateMetadata } from './popular-demolidores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDemolidoresRulesKeywordPage />;
}
