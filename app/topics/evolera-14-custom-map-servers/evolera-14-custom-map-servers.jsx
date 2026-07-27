import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-custom-map-servers');
}

export default function Evolera14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-custom-map-servers" />;
}
