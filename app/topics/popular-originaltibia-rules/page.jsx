import PopularOriginaltibiaRulesKeywordPage, { generateMetadata } from './popular-originaltibia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOriginaltibiaRulesKeywordPage />;
}
