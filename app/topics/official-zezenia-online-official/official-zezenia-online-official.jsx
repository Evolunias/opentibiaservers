import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online-official');
}

export default function OfficialZezeniaOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online-official" />;
}
