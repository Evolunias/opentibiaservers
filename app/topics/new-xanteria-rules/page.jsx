import NewXanteriaRulesKeywordPage, { generateMetadata } from './new-xanteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewXanteriaRulesKeywordPage />;
}
