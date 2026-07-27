import NewSeasonXanteriaRulesKeywordPage, { generateMetadata } from './new-season-xanteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonXanteriaRulesKeywordPage />;
}
