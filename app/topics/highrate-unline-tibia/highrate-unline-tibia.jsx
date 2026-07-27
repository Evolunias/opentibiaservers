import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline-tibia');
}

export default function HighrateUnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline-tibia" />;
}
