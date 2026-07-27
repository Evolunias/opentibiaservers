import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-rules');
}

export default function TopOlderaRulesKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-rules" />;
}
