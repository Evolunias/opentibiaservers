import NoResetOlderaRulesKeywordPage, { generateMetadata } from './no-reset-oldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOlderaRulesKeywordPage />;
}
