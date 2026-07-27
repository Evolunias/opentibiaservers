import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-server');
}

export default function LowrateDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-server" />;
}
