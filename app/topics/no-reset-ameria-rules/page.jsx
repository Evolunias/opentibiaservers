import NoResetAmeriaRulesKeywordPage, { generateMetadata } from './no-reset-ameria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAmeriaRulesKeywordPage />;
}
