import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-mist-of-death-open-tibia');
}

export default function OfficialMistOfDeathOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-mist-of-death-open-tibia" />;
}
