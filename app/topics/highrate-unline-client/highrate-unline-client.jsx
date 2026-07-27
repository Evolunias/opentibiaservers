import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline-client');
}

export default function HighrateUnlineClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline-client" />;
}
