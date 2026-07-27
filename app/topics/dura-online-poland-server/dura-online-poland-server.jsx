import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-poland-server');
}

export default function DuraOnlinePolandServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-poland-server" />;
}
