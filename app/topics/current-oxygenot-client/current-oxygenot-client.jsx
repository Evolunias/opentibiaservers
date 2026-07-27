import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-client');
}

export default function CurrentOxygenotClientKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-client" />;
}
