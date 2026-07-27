import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-usa-server');
}

export default function DuraOnlineUsaServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-usa-server" />;
}
