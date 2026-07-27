import PopularArchlightRulesKeywordPage, { generateMetadata } from './popular-archlight-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArchlightRulesKeywordPage />;
}
