import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-mist-of-death-tibia');
}

export default function PopularMistOfDeathTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-mist-of-death-tibia" />;
}
