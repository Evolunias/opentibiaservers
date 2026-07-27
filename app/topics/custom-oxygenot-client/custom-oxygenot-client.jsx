import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-client');
}

export default function CustomOxygenotClientKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-client" />;
}
