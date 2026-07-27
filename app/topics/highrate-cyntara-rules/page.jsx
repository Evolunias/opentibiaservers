import HighrateCyntaraRulesKeywordPage, { generateMetadata } from './highrate-cyntara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCyntaraRulesKeywordPage />;
}
