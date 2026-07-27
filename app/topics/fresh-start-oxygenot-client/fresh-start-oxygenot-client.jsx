import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-client');
}

export default function FreshStartOxygenotClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-client" />;
}
