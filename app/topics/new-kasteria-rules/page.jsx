import NewKasteriaRulesKeywordPage, { generateMetadata } from './new-kasteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewKasteriaRulesKeywordPage />;
}
