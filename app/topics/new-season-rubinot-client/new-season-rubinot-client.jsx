import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-client');
}

export default function NewSeasonRubinotClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-client" />;
}
