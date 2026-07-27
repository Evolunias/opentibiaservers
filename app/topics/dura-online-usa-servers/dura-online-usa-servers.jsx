import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-usa-servers');
}

export default function DuraOnlineUsaServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-usa-servers" />;
}
