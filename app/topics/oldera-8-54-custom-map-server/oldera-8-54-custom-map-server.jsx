import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-54-custom-map-server');
}

export default function Oldera854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-54-custom-map-server" />;
}
