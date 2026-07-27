import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-4-custom-map-server');
}

export default function Luminera84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-4-custom-map-server" />;
}
