import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-login');
}

export default function HighrateMiracleLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-login" />;
}
