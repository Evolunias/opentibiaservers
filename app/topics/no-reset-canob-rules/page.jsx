import NoResetCanobRulesKeywordPage, { generateMetadata } from './no-reset-canob-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCanobRulesKeywordPage />;
}
