import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zezenia-online-ot');
}

export default function NewSeasonZezeniaOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-zezenia-online-ot" />;
}
