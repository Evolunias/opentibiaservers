import NoResetTibiaraRulesKeywordPage, { generateMetadata } from './no-reset-tibiara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiaraRulesKeywordPage />;
}
