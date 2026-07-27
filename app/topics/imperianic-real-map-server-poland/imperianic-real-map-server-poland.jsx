import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-server-poland');
}

export default function ImperianicRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-server-poland" />;
}
