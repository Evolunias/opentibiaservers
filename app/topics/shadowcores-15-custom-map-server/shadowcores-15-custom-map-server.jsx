import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-15-custom-map-server');
}

export default function Shadowcores15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-15-custom-map-server" />;
}
