import ActiveTibiameRulesKeywordPage, { generateMetadata } from './active-tibiame-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiameRulesKeywordPage />;
}
