import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online-ot');
}

export default function OfficialZezeniaOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online-ot" />;
}
