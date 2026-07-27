import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-client');
}

export default function NewOxygenotClientKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-client" />;
}
