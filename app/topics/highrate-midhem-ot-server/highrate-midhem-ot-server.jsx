import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-ot-server');
}

export default function HighrateMidhemOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-ot-server" />;
}
