import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-4-custom-map-server');
}

export default function Unline84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-4-custom-map-server" />;
}
