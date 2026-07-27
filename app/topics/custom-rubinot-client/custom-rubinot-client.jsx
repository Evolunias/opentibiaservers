import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot-client');
}

export default function CustomRubinotClientKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot-client" />;
}
