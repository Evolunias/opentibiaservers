import PopularTibiameRulesKeywordPage, { generateMetadata } from './popular-tibiame-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiameRulesKeywordPage />;
}
