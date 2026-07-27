import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-server-europe');
}

export default function OxygenotCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-server-europe" />;
}
