import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-9-6-real-map-servers');
}

export default function Luminera96RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-9-6-real-map-servers" />;
}
