import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oxygenot-client');
}

export default function OfficialOxygenotClientKeywordPage() {
  return <StaticKeywordPage slug="official-oxygenot-client" />;
}
