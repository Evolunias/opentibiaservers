import NoResetCoxaotRulesKeywordPage, { generateMetadata } from './no-reset-coxaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCoxaotRulesKeywordPage />;
}
