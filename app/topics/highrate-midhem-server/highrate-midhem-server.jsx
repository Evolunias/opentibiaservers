import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-server');
}

export default function HighrateMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-server" />;
}
