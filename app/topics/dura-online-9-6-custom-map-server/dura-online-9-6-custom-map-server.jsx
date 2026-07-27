import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-9-6-custom-map-server');
}

export default function DuraOnline96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-9-6-custom-map-server" />;
}
