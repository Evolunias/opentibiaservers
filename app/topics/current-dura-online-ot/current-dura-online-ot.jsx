import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dura-online-ot');
}

export default function CurrentDuraOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="current-dura-online-ot" />;
}
