import HighrateTibiameRulesKeywordPage, { generateMetadata } from './highrate-tibiame-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiameRulesKeywordPage />;
}
