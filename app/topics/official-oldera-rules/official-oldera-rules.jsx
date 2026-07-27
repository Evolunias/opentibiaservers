import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oldera-rules');
}

export default function OfficialOlderaRulesKeywordPage() {
  return <StaticKeywordPage slug="official-oldera-rules" />;
}
