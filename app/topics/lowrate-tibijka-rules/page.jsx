import LowrateTibijkaRulesKeywordPage, { generateMetadata } from './lowrate-tibijka-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibijkaRulesKeywordPage />;
}
