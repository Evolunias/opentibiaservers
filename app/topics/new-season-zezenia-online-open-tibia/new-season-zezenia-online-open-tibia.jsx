import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zezenia-online-open-tibia');
}

export default function NewSeasonZezeniaOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-zezenia-online-open-tibia" />;
}
