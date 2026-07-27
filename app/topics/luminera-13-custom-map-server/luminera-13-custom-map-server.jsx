import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-13-custom-map-server');
}

export default function Luminera13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-13-custom-map-server" />;
}
