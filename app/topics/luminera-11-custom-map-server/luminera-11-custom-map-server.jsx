import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-11-custom-map-server');
}

export default function Luminera11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-11-custom-map-server" />;
}
