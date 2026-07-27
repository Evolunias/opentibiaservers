import CustomYurotsRulesKeywordPage, { generateMetadata } from './custom-yurots-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomYurotsRulesKeywordPage />;
}
