import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dura-online-server');
}

export default function CurrentDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="current-dura-online-server" />;
}
