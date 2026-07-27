import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-servers-uk');
}

export default function ImperianicCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-servers-uk" />;
}
