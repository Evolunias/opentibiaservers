import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-6-custom-map-server');
}

export default function Luminera76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-6-custom-map-server" />;
}
