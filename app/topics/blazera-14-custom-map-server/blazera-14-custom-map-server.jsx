import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-14-custom-map-server');
}

export default function Blazera14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-14-custom-map-server" />;
}
