import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-tibia');
}

export default function HighrateNostaltherTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-tibia" />;
}
