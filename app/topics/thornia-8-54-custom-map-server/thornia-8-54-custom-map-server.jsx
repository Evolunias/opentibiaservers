import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-54-custom-map-server');
}

export default function Thornia854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-54-custom-map-server" />;
}
