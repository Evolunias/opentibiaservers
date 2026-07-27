import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-client');
}

export default function PopularOxygenotClientKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-client" />;
}
