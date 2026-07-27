import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zezenia-online-official');
}

export default function NewSeasonZezeniaOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-zezenia-online-official" />;
}
