import LowrateTibiaraRulesKeywordPage, { generateMetadata } from './lowrate-tibiara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaraRulesKeywordPage />;
}
