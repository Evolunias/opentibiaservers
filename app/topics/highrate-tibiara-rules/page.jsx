import HighrateTibiaraRulesKeywordPage, { generateMetadata } from './highrate-tibiara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaraRulesKeywordPage />;
}
