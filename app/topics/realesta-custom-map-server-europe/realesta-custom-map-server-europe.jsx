import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-server-europe');
}

export default function RealestaCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-server-europe" />;
}
