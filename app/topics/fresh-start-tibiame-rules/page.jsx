import FreshStartTibiameRulesKeywordPage, { generateMetadata } from './fresh-start-tibiame-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiameRulesKeywordPage />;
}
