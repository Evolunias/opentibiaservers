import PopularTibiaraRulesKeywordPage, { generateMetadata } from './popular-tibiara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaraRulesKeywordPage />;
}
