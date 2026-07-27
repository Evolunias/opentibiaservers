import NoResetImperianicRulesKeywordPage, { generateMetadata } from './no-reset-imperianic-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetImperianicRulesKeywordPage />;
}
