import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-14-custom-map-server');
}

export default function Shadowcores14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-14-custom-map-server" />;
}
