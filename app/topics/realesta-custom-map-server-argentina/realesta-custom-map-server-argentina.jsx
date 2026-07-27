import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-server-argentina');
}

export default function RealestaCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-server-argentina" />;
}
