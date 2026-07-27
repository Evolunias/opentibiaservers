import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-4-custom-map-server');
}

export default function Unline74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-4-custom-map-server" />;
}
