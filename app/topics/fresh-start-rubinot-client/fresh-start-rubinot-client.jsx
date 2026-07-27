import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot-client');
}

export default function FreshStartRubinotClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot-client" />;
}
