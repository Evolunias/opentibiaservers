import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-0-custom-map-server');
}

export default function Luminera100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-0-custom-map-server" />;
}
