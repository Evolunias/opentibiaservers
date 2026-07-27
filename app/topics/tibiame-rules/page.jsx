import TibiameRulesKeywordPage, { generateMetadata } from './tibiame-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameRulesKeywordPage />;
}
