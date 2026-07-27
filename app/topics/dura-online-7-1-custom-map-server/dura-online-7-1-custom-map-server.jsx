import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-1-custom-map-server');
}

export default function DuraOnline71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-1-custom-map-server" />;
}
