import NoResetMidhemRulesKeywordPage, { generateMetadata } from './no-reset-midhem-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMidhemRulesKeywordPage />;
}
