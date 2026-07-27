import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara');
}

export default function LowrateCyntaraKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara" />;
}
