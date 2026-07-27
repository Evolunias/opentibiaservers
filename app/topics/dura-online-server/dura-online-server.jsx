import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-server');
}

export default function DuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-server" />;
}
