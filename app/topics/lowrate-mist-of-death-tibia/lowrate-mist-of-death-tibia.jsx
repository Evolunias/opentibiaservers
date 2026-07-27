import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death-tibia');
}

export default function LowrateMistOfDeathTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death-tibia" />;
}
