import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star-open-tibia');
}

export default function OfficialNtoStarOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star-open-tibia" />;
}
