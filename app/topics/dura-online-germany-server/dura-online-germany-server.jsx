import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-germany-server');
}

export default function DuraOnlineGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-germany-server" />;
}
