import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-coxaot-server');
}

export default function LowExpCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-coxaot-server" />;
}
