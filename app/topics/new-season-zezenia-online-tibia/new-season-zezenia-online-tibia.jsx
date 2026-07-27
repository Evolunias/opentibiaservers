import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zezenia-online-tibia');
}

export default function NewSeasonZezeniaOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-zezenia-online-tibia" />;
}
