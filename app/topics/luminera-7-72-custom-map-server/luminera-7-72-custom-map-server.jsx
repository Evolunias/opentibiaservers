import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-72-custom-map-server');
}

export default function Luminera772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-72-custom-map-server" />;
}
