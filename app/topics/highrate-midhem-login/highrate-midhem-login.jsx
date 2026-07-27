import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-login');
}

export default function HighrateMidhemLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-login" />;
}
