import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-mist-of-death-open-tibia');
}

export default function CurrentMistOfDeathOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-mist-of-death-open-tibia" />;
}
