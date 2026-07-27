import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-11-custom-map-server');
}

export default function DuraOnline11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-11-custom-map-server" />;
}
