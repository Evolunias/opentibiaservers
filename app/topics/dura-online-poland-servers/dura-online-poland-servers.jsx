import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-poland-servers');
}

export default function DuraOnlinePolandServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-poland-servers" />;
}
