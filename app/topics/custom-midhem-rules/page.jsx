import CustomMidhemRulesKeywordPage, { generateMetadata } from './custom-midhem-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMidhemRulesKeywordPage />;
}
