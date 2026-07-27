import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-official');
}

export default function LowrateDuraOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-official" />;
}
