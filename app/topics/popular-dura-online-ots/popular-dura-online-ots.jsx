import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online-ots');
}

export default function PopularDuraOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online-ots" />;
}
