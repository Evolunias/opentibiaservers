import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot-client');
}

export default function BestOxygenotClientKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot-client" />;
}
