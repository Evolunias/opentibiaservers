import NoResetTibianusRulesKeywordPage, { generateMetadata } from './no-reset-tibianus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibianusRulesKeywordPage />;
}
