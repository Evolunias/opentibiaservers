import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores-tibia');
}

export default function NewSeasonShadowcoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores-tibia" />;
}
