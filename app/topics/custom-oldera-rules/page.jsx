import CustomOlderaRulesKeywordPage, { generateMetadata } from './custom-oldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOlderaRulesKeywordPage />;
}
