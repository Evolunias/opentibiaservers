import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-register');
}

export default function HighrateCoxaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-register" />;
}
