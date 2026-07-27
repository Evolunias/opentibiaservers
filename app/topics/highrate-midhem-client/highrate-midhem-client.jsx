import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-client');
}

export default function HighrateMidhemClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-client" />;
}
