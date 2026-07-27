import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-11-custom-map-server');
}

export default function Miracle11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-11-custom-map-server" />;
}
