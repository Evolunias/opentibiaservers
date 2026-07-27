import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-servers-mexico');
}

export default function RealestaCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-servers-mexico" />;
}
