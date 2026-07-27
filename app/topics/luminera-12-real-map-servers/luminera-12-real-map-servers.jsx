import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-12-real-map-servers');
}

export default function Luminera12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-12-real-map-servers" />;
}
