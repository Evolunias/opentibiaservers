import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-15-custom-map-server');
}

export default function Miracle15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-15-custom-map-server" />;
}
