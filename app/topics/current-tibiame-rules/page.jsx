import CurrentTibiameRulesKeywordPage, { generateMetadata } from './current-tibiame-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiameRulesKeywordPage />;
}
