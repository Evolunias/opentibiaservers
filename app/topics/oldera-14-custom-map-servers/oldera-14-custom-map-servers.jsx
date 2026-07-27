import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-14-custom-map-servers');
}

export default function Oldera14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-14-custom-map-servers" />;
}
