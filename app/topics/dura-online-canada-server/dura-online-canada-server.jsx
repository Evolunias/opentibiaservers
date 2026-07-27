import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-canada-server');
}

export default function DuraOnlineCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-canada-server" />;
}
