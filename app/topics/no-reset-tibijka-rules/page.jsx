import NoResetTibijkaRulesKeywordPage, { generateMetadata } from './no-reset-tibijka-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibijkaRulesKeywordPage />;
}
