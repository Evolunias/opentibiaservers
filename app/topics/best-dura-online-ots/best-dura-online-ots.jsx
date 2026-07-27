import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dura-online-ots');
}

export default function BestDuraOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="best-dura-online-ots" />;
}
