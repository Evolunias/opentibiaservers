import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-9-6-custom-map-server');
}

export default function Luminera96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-9-6-custom-map-server" />;
}
