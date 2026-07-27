import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death-open-tibia');
}

export default function LowrateMistOfDeathOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death-open-tibia" />;
}
