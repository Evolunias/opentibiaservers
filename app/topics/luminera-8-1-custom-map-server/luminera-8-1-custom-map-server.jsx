import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-1-custom-map-server');
}

export default function Luminera81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-1-custom-map-server" />;
}
