import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zezenia-online-official');
}

export default function BestZezeniaOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-zezenia-online-official" />;
}
