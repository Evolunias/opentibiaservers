import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death-open-tibia');
}

export default function TopMistOfDeathOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death-open-tibia" />;
}
