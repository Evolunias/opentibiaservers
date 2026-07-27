import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-server-mexico');
}

export default function RealestaCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-server-mexico" />;
}
