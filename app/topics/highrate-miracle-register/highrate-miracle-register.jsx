import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-register');
}

export default function HighrateMiracleRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-register" />;
}
