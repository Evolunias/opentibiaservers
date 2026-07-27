import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-argentina-servers');
}

export default function DuraOnlineArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-argentina-servers" />;
}
