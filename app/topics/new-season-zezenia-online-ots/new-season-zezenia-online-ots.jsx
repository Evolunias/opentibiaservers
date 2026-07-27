import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zezenia-online-ots');
}

export default function NewSeasonZezeniaOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-zezenia-online-ots" />;
}
