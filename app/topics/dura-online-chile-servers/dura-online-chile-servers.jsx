import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-chile-servers');
}

export default function DuraOnlineChileServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-chile-servers" />;
}
