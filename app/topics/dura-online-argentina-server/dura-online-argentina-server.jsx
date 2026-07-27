import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-argentina-server');
}

export default function DuraOnlineArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-argentina-server" />;
}
