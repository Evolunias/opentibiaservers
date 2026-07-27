import NewTibiaraRulesKeywordPage, { generateMetadata } from './new-tibiara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaraRulesKeywordPage />;
}
