import CustomAmeriaRulesKeywordPage, { generateMetadata } from './custom-ameria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAmeriaRulesKeywordPage />;
}
