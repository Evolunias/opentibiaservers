import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-client');
}

export default function LowrateDuraOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-client" />;
}
