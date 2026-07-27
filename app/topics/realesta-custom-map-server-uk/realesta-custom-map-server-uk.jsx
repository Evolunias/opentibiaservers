import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-server-uk');
}

export default function RealestaCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-server-uk" />;
}
