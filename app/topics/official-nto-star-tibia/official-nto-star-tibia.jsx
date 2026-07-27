import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star-tibia');
}

export default function OfficialNtoStarTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star-tibia" />;
}
