import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera-client');
}

export default function HighrateOlderaClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera-client" />;
}
