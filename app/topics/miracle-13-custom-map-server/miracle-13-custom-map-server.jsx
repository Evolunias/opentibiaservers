import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-13-custom-map-server');
}

export default function Miracle13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-13-custom-map-server" />;
}
