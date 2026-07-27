import CurrentNepreniaRulesKeywordPage, { generateMetadata } from './current-neprenia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNepreniaRulesKeywordPage />;
}
