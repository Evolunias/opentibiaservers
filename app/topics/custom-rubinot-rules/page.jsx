import CustomRubinotRulesKeywordPage, { generateMetadata } from './custom-rubinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRubinotRulesKeywordPage />;
}
