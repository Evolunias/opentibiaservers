import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zezenia-online-ots');
}

export default function NewZezeniaOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="new-zezenia-online-ots" />;
}
