import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-ots');
}

export default function LowrateDuraOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-ots" />;
}
