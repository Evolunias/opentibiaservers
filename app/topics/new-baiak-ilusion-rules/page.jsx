import NewBaiakIlusionRulesKeywordPage, { generateMetadata } from './new-baiak-ilusion-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewBaiakIlusionRulesKeywordPage />;
}
