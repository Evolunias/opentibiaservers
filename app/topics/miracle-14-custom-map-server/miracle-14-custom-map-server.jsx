import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-14-custom-map-server');
}

export default function Miracle14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-14-custom-map-server" />;
}
