import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-tibia');
}

export default function BestMistOfDeathTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-tibia" />;
}
