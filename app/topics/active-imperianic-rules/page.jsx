import ActiveImperianicRulesKeywordPage, { generateMetadata } from './active-imperianic-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveImperianicRulesKeywordPage />;
}
