import OfficialYurotsRulesKeywordPage, { generateMetadata } from './official-yurots-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialYurotsRulesKeywordPage />;
}
