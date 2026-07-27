import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-yurots-server');
}

export default function CustomMapYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-yurots-server" />;
}
