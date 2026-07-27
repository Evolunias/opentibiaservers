import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-client');
}

export default function NewRubinotClientKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-client" />;
}
