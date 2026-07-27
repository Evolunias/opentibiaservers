import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibianus-tibia');
}

export default function NewSeasonTibianusTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibianus-tibia" />;
}
