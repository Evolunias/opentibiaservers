import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot-client');
}

export default function ActiveOxygenotClientKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot-client" />;
}
