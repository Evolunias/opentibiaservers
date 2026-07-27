import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-login');
}

export default function HighrateCoxaotLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-login" />;
}
