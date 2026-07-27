import PopularBaiakIlusionRulesKeywordPage, { generateMetadata } from './popular-baiak-ilusion-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularBaiakIlusionRulesKeywordPage />;
}
