import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-mist-of-death-open-tibia');
}

export default function CustomMistOfDeathOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-mist-of-death-open-tibia" />;
}
