import ActiveYurotsRulesKeywordPage, { generateMetadata } from './active-yurots-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveYurotsRulesKeywordPage />;
}
