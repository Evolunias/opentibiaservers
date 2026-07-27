import CustomUnlineRulesKeywordPage, { generateMetadata } from './custom-unline-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomUnlineRulesKeywordPage />;
}
