import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline-server');
}

export default function HighrateUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline-server" />;
}
