import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-14-custom-map-server');
}

export default function Luminera14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-14-custom-map-server" />;
}
