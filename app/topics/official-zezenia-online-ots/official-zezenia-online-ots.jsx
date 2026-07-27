import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online-ots');
}

export default function OfficialZezeniaOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online-ots" />;
}
