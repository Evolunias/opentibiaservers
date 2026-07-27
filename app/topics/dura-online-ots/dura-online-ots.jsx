import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-ots');
}

export default function DuraOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="dura-online-ots" />;
}
