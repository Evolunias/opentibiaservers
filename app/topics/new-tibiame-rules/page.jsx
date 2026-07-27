import NewTibiameRulesKeywordPage, { generateMetadata } from './new-tibiame-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiameRulesKeywordPage />;
}
