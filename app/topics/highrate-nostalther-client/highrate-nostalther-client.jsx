import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-client');
}

export default function HighrateNostaltherClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-client" />;
}
