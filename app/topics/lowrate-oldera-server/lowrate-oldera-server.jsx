import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-server');
}

export default function LowrateOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-server" />;
}
