import HighrateXanteriaRulesKeywordPage, { generateMetadata } from './highrate-xanteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateXanteriaRulesKeywordPage />;
}
