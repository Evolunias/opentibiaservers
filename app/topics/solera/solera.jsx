import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('solera');
}

export default function SoleraKeywordPage() {
  return <StaticKeywordPage slug="solera" />;
}
