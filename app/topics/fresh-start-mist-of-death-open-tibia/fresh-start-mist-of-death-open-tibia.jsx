import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-mist-of-death-open-tibia');
}

export default function FreshStartMistOfDeathOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-mist-of-death-open-tibia" />;
}
