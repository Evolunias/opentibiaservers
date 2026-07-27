import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera-tibia');
}

export default function HighrateOlderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera-tibia" />;
}
