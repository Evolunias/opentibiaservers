import ActiveDemolidoresRulesKeywordPage, { generateMetadata } from './active-demolidores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDemolidoresRulesKeywordPage />;
}
