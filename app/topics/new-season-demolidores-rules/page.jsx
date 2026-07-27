import NewSeasonDemolidoresRulesKeywordPage, { generateMetadata } from './new-season-demolidores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonDemolidoresRulesKeywordPage />;
}
