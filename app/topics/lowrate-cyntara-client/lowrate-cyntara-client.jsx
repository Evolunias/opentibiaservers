import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara-client');
}

export default function LowrateCyntaraClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara-client" />;
}
