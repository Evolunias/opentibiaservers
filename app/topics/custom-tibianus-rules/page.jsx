import CustomTibianusRulesKeywordPage, { generateMetadata } from './custom-tibianus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibianusRulesKeywordPage />;
}
