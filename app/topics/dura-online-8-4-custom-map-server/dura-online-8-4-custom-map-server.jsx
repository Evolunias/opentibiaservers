import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-4-custom-map-server');
}

export default function DuraOnline84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-4-custom-map-server" />;
}
