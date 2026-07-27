import NewOriginaltibiaRulesKeywordPage, { generateMetadata } from './new-originaltibia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOriginaltibiaRulesKeywordPage />;
}
