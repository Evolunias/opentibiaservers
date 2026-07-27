import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-ot-server');
}

export default function HighrateNostaltherOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-ot-server" />;
}
