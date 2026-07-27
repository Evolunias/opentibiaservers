import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-12-custom-map-server');
}

export default function Luminera12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-12-custom-map-server" />;
}
