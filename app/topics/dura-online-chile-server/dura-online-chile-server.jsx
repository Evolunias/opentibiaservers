import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-chile-server');
}

export default function DuraOnlineChileServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-chile-server" />;
}
