import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-servers-poland');
}

export default function ImperianicCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-servers-poland" />;
}
