import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-14-custom-map-server');
}

export default function Unline14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="unline-14-custom-map-server" />;
}
