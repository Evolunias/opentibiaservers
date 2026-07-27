import CurrentXanteriaRulesKeywordPage, { generateMetadata } from './current-xanteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentXanteriaRulesKeywordPage />;
}
