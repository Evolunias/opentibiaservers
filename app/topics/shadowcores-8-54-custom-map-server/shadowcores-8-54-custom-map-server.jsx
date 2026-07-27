import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-54-custom-map-server');
}

export default function Shadowcores854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-54-custom-map-server" />;
}
