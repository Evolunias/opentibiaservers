import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-tibia');
}

export default function HighrateClassicusTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-tibia" />;
}
