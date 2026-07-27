import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zezenia-online-official');
}

export default function NewZezeniaOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-zezenia-online-official" />;
}
