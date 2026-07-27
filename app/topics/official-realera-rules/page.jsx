import OfficialRealeraRulesKeywordPage, { generateMetadata } from './official-realera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealeraRulesKeywordPage />;
}
