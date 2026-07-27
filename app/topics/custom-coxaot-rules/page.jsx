import CustomCoxaotRulesKeywordPage, { generateMetadata } from './custom-coxaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCoxaotRulesKeywordPage />;
}
