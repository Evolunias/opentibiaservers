import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-server-uk');
}

export default function OxygenotCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-server-uk" />;
}
