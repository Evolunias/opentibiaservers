import CustomAlasteraRulesKeywordPage, { generateMetadata } from './custom-alastera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAlasteraRulesKeywordPage />;
}
