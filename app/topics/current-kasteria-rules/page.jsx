import CurrentKasteriaRulesKeywordPage, { generateMetadata } from './current-kasteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentKasteriaRulesKeywordPage />;
}
