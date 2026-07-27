import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-ot');
}

export default function HighrateNostaltherOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-ot" />;
}
