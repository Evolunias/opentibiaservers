import CustomOxygenotRulesKeywordPage, { generateMetadata } from './custom-oxygenot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOxygenotRulesKeywordPage />;
}
