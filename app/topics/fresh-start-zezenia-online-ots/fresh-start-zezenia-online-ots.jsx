import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zezenia-online-ots');
}

export default function FreshStartZezeniaOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zezenia-online-ots" />;
}
