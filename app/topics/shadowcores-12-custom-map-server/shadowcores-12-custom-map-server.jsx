import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-12-custom-map-server');
}

export default function Shadowcores12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-12-custom-map-server" />;
}
