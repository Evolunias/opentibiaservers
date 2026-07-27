import OfficialCyntaraRulesKeywordPage, { generateMetadata } from './official-cyntara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCyntaraRulesKeywordPage />;
}
