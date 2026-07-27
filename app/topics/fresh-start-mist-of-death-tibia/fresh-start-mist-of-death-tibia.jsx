import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-mist-of-death-tibia');
}

export default function FreshStartMistOfDeathTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-mist-of-death-tibia" />;
}
