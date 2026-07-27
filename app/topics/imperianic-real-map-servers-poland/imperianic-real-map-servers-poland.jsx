import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-servers-poland');
}

export default function ImperianicRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-servers-poland" />;
}
