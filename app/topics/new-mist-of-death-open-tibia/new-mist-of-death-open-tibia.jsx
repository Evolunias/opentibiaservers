import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death-open-tibia');
}

export default function NewMistOfDeathOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death-open-tibia" />;
}
