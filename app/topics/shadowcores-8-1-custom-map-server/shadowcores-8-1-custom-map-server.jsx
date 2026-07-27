import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-1-custom-map-server');
}

export default function Shadowcores81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-1-custom-map-server" />;
}
