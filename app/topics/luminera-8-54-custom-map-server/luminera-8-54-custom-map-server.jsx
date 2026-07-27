import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-54-custom-map-server');
}

export default function Luminera854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-54-custom-map-server" />;
}
