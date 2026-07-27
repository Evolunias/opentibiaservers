import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot-client');
}

export default function OfficialRubinotClientKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot-client" />;
}
