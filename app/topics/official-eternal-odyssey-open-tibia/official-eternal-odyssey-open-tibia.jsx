import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eternal-odyssey-open-tibia');
}

export default function OfficialEternalOdysseyOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-eternal-odyssey-open-tibia" />;
}
