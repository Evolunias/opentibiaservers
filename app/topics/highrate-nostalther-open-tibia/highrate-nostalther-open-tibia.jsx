import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-open-tibia');
}

export default function HighrateNostaltherOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-open-tibia" />;
}
