import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara-server');
}

export default function LowrateCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara-server" />;
}
