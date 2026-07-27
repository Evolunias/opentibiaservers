import CustomBaiakIlusionRulesKeywordPage, { generateMetadata } from './custom-baiak-ilusion-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBaiakIlusionRulesKeywordPage />;
}
