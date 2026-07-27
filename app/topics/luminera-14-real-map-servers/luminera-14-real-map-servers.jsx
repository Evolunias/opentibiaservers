import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-14-real-map-servers');
}

export default function Luminera14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-14-real-map-servers" />;
}
