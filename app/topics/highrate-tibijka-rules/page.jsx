import HighrateTibijkaRulesKeywordPage, { generateMetadata } from './highrate-tibijka-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibijkaRulesKeywordPage />;
}
