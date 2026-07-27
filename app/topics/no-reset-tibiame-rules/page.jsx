import NoResetTibiameRulesKeywordPage, { generateMetadata } from './no-reset-tibiame-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiameRulesKeywordPage />;
}
