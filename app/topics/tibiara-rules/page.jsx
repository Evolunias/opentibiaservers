import TibiaraRulesKeywordPage, { generateMetadata } from './tibiara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraRulesKeywordPage />;
}
