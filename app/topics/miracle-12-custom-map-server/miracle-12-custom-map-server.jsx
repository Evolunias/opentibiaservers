import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-12-custom-map-server');
}

export default function Miracle12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-12-custom-map-server" />;
}
