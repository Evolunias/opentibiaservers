import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-rules');
}

export default function OfficialCyntaraRulesKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-rules" />;
}
