import ActiveOriginaltibiaRulesKeywordPage, { generateMetadata } from './active-originaltibia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOriginaltibiaRulesKeywordPage />;
}
