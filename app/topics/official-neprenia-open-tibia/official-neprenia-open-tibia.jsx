import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia-open-tibia');
}

export default function OfficialNepreniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia-open-tibia" />;
}
