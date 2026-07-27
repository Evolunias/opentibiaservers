import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-0-custom-map-server');
}

export default function Oldera100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-0-custom-map-server" />;
}
