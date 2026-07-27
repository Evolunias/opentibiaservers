import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-ot');
}

export default function LowrateDuraOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-ot" />;
}
