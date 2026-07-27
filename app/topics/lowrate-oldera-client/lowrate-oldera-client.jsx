import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-client');
}

export default function LowrateOlderaClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-client" />;
}
