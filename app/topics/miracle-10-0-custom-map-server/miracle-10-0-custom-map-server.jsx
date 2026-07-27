import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-10-0-custom-map-server');
}

export default function Miracle100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-10-0-custom-map-server" />;
}
