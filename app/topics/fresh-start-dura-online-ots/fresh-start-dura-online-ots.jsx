import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dura-online-ots');
}

export default function FreshStartDuraOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dura-online-ots" />;
}
