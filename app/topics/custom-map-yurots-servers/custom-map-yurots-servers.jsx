import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-yurots-servers');
}

export default function CustomMapYurotsServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-yurots-servers" />;
}
