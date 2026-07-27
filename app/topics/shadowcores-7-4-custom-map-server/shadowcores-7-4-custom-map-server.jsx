import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-4-custom-map-server');
}

export default function Shadowcores74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-4-custom-map-server" />;
}
