import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot-client');
}

export default function ActiveRubinotClientKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot-client" />;
}
