import HighrateThorniaRulesKeywordPage, { generateMetadata } from './highrate-thornia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThorniaRulesKeywordPage />;
}
