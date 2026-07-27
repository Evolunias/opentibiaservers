import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-coxaot-server');
}

export default function HighExpCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-coxaot-server" />;
}
