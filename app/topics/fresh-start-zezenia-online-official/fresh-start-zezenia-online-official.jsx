import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zezenia-online-official');
}

export default function FreshStartZezeniaOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zezenia-online-official" />;
}
