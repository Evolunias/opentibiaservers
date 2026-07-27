import NoResetBlazeraRulesKeywordPage, { generateMetadata } from './no-reset-blazera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetBlazeraRulesKeywordPage />;
}
