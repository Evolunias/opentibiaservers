import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-open-tibia');
}

export default function HighrateClassicusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-open-tibia" />;
}
