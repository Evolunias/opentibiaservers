import CustomOriginaltibiaRulesKeywordPage, { generateMetadata } from './custom-originaltibia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOriginaltibiaRulesKeywordPage />;
}
