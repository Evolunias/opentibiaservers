import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-open-tibia');
}

export default function BestMistOfDeathOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-open-tibia" />;
}
