import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eternal-odyssey-tibia');
}

export default function OfficialEternalOdysseyTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-eternal-odyssey-tibia" />;
}
