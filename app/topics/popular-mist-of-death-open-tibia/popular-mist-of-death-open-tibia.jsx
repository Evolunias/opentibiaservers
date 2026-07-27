import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-mist-of-death-open-tibia');
}

export default function PopularMistOfDeathOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-mist-of-death-open-tibia" />;
}
