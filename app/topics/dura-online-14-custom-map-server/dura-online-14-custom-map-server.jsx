import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-14-custom-map-server');
}

export default function DuraOnline14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-14-custom-map-server" />;
}
