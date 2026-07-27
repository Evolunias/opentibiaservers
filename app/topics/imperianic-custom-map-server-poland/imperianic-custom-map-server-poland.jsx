import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-server-poland');
}

export default function ImperianicCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-server-poland" />;
}
