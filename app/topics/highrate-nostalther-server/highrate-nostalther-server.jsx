import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-server');
}

export default function HighrateNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-server" />;
}
