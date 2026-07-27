import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-12-custom-map-server');
}

export default function Blazera12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-12-custom-map-server" />;
}
