import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-11-custom-map-server');
}

export default function Shadowcores11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-11-custom-map-server" />;
}
