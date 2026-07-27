import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zezenia-online-official');
}

export default function CustomZezeniaOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-zezenia-online-official" />;
}
