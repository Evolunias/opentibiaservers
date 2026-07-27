import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-4-custom-map-server');
}

export default function DuraOnline74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-4-custom-map-server" />;
}
