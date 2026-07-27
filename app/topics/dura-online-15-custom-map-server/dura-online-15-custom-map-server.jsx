import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-15-custom-map-server');
}

export default function DuraOnline15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-15-custom-map-server" />;
}
